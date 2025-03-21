import { TonyDevice } from './parts';
import { Task } from '@/components/task';
import { Button } from '@/components/ui';
import { formatNumber } from '@/lib/utils';
import { BostItem as PackItemType } from '@/modules/core';
import { PaymentsApi } from '@/modules/core/models/payments';
import { invoice } from '@telegram-apps/sdk-react';
import { FC, useState } from 'react';

interface PackItemProps {
  data: PackItemType;
}

type Currency = 'ton' | 'stars';

export const PackItem: FC<PackItemProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const handleClickBuy = (currency: Currency) => async () => {
    console.log(currency);

    try {
      setLoading(true);

      let response;
      if (currency === 'ton') {
        console.log('ton');
        response = await PaymentsApi.ton.invoice({ bostId: String(data.id) });
      } else {
        console.log('stars');
        response = await PaymentsApi.stars.invoice({ bostId: String(data.id) });
        console.log('response', response.paymentLink);
        openInvoice(response.paymentLink);
      }

      console.log(`${currency.toUpperCase()} invoice response:`, response);
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
      console.log('isOpened', isOpened);
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
            >
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl font-roboto">{formatNumber(data.price.ton)}</p>
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
