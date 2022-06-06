import { rest } from 'msw';
import { CITIES } from '@/constant';
import { paginator } from '@/helper';

const success_message = (data) => {
  return {
    success: true,
    status_code: 200,
    data,
  };
};

const job_data = [
  {
    id: 0,
    title: 'frontend developer 1',
    city: 34,
    area: 'üsküdar',
    description: 'İstanbul üsküdar adresinde tam zamanlı çalışacak frontend developer arayışımız devam etmektedir',
    img: 'https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/866/171866-060520201738.png',
  },
  {
    id: 1,
    title: 'Backend developer 1',
    city: 6,
    area: 'mamak',
    description: 'Ankara mamak adresinde  parttime(remote) çalışacak backend developer arayışımız devam etmektedir',

    img: 'https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/019/259019_207339.jpg',
  },
  {
    id: 2,
    title: 'mobile developer 1',
    city: 34,
    area: 'Fatih',
    description:
      'İstanbul fatih lokasyonunda hibrit olarak haftada 2 gün ofis 3 gün remote şeklinde çalışacak android developer aranmaktadır',
    img: 'https://img-kariyer.mncdn.com/UploadFiles/Clients/Logolar/18063.gif',
  },
  {
    id: 3,
    title: 'frontend developer 2',
    city: 34,
    area: 'üsküdar',
    description: 'İstanbul üsküdar adresinde tam zamanlı çalışacak frontend developer arayışımız devam etmektedir',
    img: 'https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/866/171866-060520201738.png',
  },
  {
    id: 4,
    title: 'Backend developer 2',
    city: 6,
    area: 'mamak',
    description: 'Ankara mamak adresinde  parttime(remote) çalışacak backend developer arayışımız devam etmektedir',

    img: 'https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/019/259019_207339.jpg',
  },
  {
    id: 5,
    title: 'mobile developer 2',
    city: 34,
    area: 'Fatih',
    description:
      'İstanbul fatih lokasyonunda hibrit olarak haftada 2 gün ofis 3 gün remote şeklinde çalışacak android developer aranmaktadır',
    img: 'https://img-kariyer.mncdn.com/UploadFiles/Clients/Logolar/18063.gif',
  },
  {
    id: 6,
    title: 'frontend developer 3',
    city: 34,
    area: 'üsküdar',
    description: 'İstanbul üsküdar adresinde tam zamanlı çalışacak frontend developer arayışımız devam etmektedir',
    img: 'https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/866/171866-060520201738.png',
  },
  {
    id: 7,
    title: 'Backend developer 3',
    city: 6,
    area: 'mamak',
    description: 'Ankara mamak adresinde  parttime(remote) çalışacak backend developer arayışımız devam etmektedir',

    img: 'https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/019/259019_207339.jpg',
  },
  {
    id: 8,
    title: 'mobile developer 3',
    city: 34,
    area: 'Fatih',
    description:
      'İstanbul fatih lokasyonunda hibrit olarak haftada 2 gün ofis 3 gün remote şeklinde çalışacak android developer aranmaktadır',
    img: 'https://img-kariyer.mncdn.com/UploadFiles/Clients/Logolar/18063.gif',
  },
];
const pagerCount = 3;

export default [
  rest.get('/api-mock/cities', (req, res, ctx) => {
    return res(ctx.json(success_message(CITIES)));
  }),

  rest.get('/api-mock/jobs', (req, res, ctx) => {
    const search = req.url.searchParams.get('search');
    const city = req.url.searchParams.get('city');
    const page = req.url.searchParams.get('page');
    let filterData = job_data;

    if (search) {
      filterData = filterData.filter((x) => x.title.search(search) > -1);
    }

    if (city) {
      filterData = filterData.filter((x) => x.city == city);
    }

    let response = paginator(filterData, page, pagerCount);

    return res(
      ctx.json(
        success_message({
          totalCount: filterData.length,
          totalPage: Math.ceil(filterData.length / pagerCount),
          activePage: page,
          jobs: response,
        })
      )
    );
  }),

  rest.get('/api-mock/jobs/detail', (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    const job = job_data.find((x) => x.id == id);
    return res(ctx.json(success_message(job)));
  }),
];
