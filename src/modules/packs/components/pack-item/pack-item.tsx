import { appConfig } from '@/configs/app.config';
import { TonyDevice } from './parts';
import { Task } from '@/components/task';
import { Button } from '@/components/ui';
import { formatNumber } from '@/lib/utils';
import { BostItem as PackItemType } from '@/modules/core';
import { PaymentsApi, TonPaymentInvoiceResponse } from '@/modules/core/models/payments';
import { invoice } from '@telegram-apps/sdk-react';
import { SendTransactionRequest } from '@tonconnect/sdk';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { FC, useState } from 'react';

interface PackItemProps {
  data: PackItemType;
}

type Currency = 'ton' | 'stars';

export const PackItem: FC<PackItemProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const [tonConnectUI] = useTonConnectUI();

  const handleClickBuy = (currency: Currency) => async () => {
    try {
      setLoading(true);

      if (currency === 'ton') {
        const response = await PaymentsApi.ton.invoice({ bostId: String(data.id) });
        openTonInvoice(response);
      } else {
        const response = await PaymentsApi.stars.invoice({ bostId: String(data.id) });
        openInvoice(response.paymentLink);
      }
    } catch (error) {
      console.error(`Error getting ${currency} invoice:`, error);
    } finally {
      setLoading(false);
    }
  };

  const openInvoice = async (paymentLink: string) => {
    if (!invoice.isOpened()) {
      await invoice.open(paymentLink, 'url');
      const isOpened = invoice.isOpened();
    }
  };

  const openTonInvoice = async (data: TonPaymentInvoiceResponse) => {
    try {
      setLoading(true);
      const nanoTons = Math.pow(10, 9);
      console.log('data', data);

      const transaction: SendTransactionRequest = {
        validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
        messages: [
          {
            address: appConfig.tonAddress,
            amount: (data.amount * nanoTons).toString(),
          },
        ],
      };

      console.log('transaction', transaction);

      await tonConnectUI.sendTransaction(transaction);
    } catch (error) {
      console.error(`Error sending TON transaction: ${error}`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      {/* Tony Device */}
      <div className="flex justify-center">
        <TonyDevice size="l" />
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
              loading={loading}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl font-roboto">{data.price.ton}</p>
                <p className="text-xl leading-none">TON</p>
              </div>
            </Button>
          </div>

          <div className="flex w-full justify-end items-center">
            <Button
              size="extra-sm"
              variant="green"
              fullWidth
              loading={loading}
              onClick={handleClickBuy('stars')}
              className="max-h-[55px]"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl font-roboto">{formatNumber(+data.price.xtr)}</p>
                <p className="text-xl leading-none">Stars</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <Task key={data.id} title={data.name} img={data.image} />
    </div>
  );
};
