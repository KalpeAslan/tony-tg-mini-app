import { appConfig } from '@/configs/app.config';
import { TonyDevice } from './parts';
import { Button, Task } from '@/lib/components';
import { formatNumber } from '@/lib/utils';
import { BostItem as PackItemType, useMe, useWallet } from '@/modules/core';
import { PaymentsApi, TonPaymentInvoiceResponse } from '@/modules/core/models/payments';
import { invoice } from '@telegram-apps/sdk-react';
import { FC, useState } from 'react';

interface PackItemProps {
  boost: PackItemType;
}

type Currency = 'ton' | 'stars';

export const PackItem: FC<PackItemProps> = ({ boost }) => {
  const { isConnected, loading: walletLoading, sendTonTransaction, connect } = useWallet();
  const [loading, setLoading] = useState(false);

  const { userData } = useMe();

  const handleClickBuy = (currency: Currency) => async () => {
   
    setLoading(true);
    try {
      if (currency === 'ton') {
         // Check if wallet is connected
         if (!isConnected) {
          connect();
          return;
        }

        await purchaseWithTon(String(boost.id));
      } else {
        await purchaseWithStars(String(boost.id));
      }
    } finally {
      setLoading(false);
    }
  };

  // Purchase with TON
  const purchaseWithTon = async (bostId: string) => {
    try {
      const response = await PaymentsApi.ton.invoice({ bostId });
      return await processTonInvoice(response);
    } catch (error) {
      console.error('Error getting TON invoice:', error);
      return false;
    }
  };

  // Purchase with Stars
  const purchaseWithStars = async (bostId: string) => {
    try {
      const response = await PaymentsApi.stars.invoice({ bostId });
      return await processStarsInvoice(response.paymentLink);
    } catch (error) {
      console.error('Error getting Stars invoice:', error);
      return false;
    }
  };

  // Process TON invoice
  const processTonInvoice = async (data: TonPaymentInvoiceResponse) => {
    return await sendTonTransaction(
      appConfig.tonAddress,
      data.amount,
      boost.id.toString(),
      userData?.user?.id ?? ''
    );
  };

  // Process Stars invoice
  const processStarsInvoice = async (paymentLink: string) => {
    try {
      if (!invoice.isOpened()) {
        await invoice.open(paymentLink, 'url');
        return invoice.isOpened();
      }
      return false;
    } catch (error) {
      console.error('Error opening stars invoice:', error);
      return false;
    }
  };

  const isButtonLoading = loading || walletLoading;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      {/* Tony Device */}
      <div className="flex justify-center">
        <TonyDevice size="l" img={boost.imageUrl} />
      </div>

      {/* Currency indicators */}
      <div className="w-full">
        <div className="flex justify-between px-2 gap-2">
          <div className="flex w-full justify-end items-center">
            <Button
              size="extra-sm"
              variant="primary"
              fullWidth
              onClick={handleClickBuy('ton')}
              className="max-h-[55px]"
              loading={isButtonLoading}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl font-roboto">{boost.price.ton}</p>
                <p className="text-xl leading-none">TON</p>
              </div>
            </Button>
          </div>

          <div className="flex w-full justify-end items-center">
            <Button
              size="extra-sm"
              variant="green"
              fullWidth
              loading={isButtonLoading}
              onClick={handleClickBuy('stars')}
              className="max-h-[55px]"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl font-roboto">{formatNumber(+boost.price.xtr)}</p>
                <p className="text-xl leading-none">Stars</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <Task key={boost.id} title={boost.name} description={boost.description} img={boost.imageUrl || '/packs/tony-card.png'} />
    </div>
  );
};
