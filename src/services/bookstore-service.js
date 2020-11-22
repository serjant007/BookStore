export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: '20',
      coverImage:
        'https://kbimages1-a.akamaihd.net/002facff-68a0-414a-8491-450fb35af516/1200/1200/False/production-ready-microservices.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: '22',
      coverImage:
        'https://kbimages1-a.akamaihd.net/c35952bf-5513-4a63-8ec3-0e554dabc795/1200/1200/False/release-it.jpg',
    },
    {
      id: 3,
      title: 'JavaScript - The Definitive Guide',
      author: 'David Flanagan',
      price: '26',
      coverImage:
        'https://catalogue.immateriel.fr/resources/43/55/389664b8c341254e2d19e0050fed79971b9473d55ce9795aa69164063035.png',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('Something bad happend'));
      }, 700);
    });
  }
}
