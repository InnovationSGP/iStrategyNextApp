import Loading from '@/app/loading';

export const delay = (delayTime: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, delayTime));

export const DelayComponent = async () => {
  await delay(3000);
  return <Loading />;
};
