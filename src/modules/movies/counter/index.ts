import { IMovieDetails } from 'common/interfaces';

export const setCounter = (
  e: React.MouseEvent<HTMLButtonElement>,
  detailsPage: IMovieDetails,
) => {
  const target = e.target as HTMLButtonElement;
  const localStore = localStorage.getItem('favorite');

  if (typeof localStore !== 'string')
    throw new Error('Local Storage not found');
  const data = JSON.parse(localStore);

  if (target.textContent === 'Add to favorite') {
    data.push(detailsPage);
    localStorage.setItem('favorite', JSON.stringify(data));
    target.textContent = 'Remove from favorite';

    return data.length;
  } else {
    const newData = data.filter(
      (el: IMovieDetails) => el.id !== detailsPage.id,
    );
    localStorage.setItem('favorite', JSON.stringify(newData));
    target.textContent = 'Add to favorite';

    return newData.length;
  }
};

export const getCounter = () => {
  const localStore = localStorage.getItem('favorite');

  if (typeof localStore !== 'string')
    throw new Error('Local Storage not found');
  const data = JSON.parse(localStore);

  return data.length;
};
