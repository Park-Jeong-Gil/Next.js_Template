export interface pagesType {
  path: string;
  label?: string;
  children?: pagesType[];
}

export const navigation: pagesType[] = [
  {
    path: '/',
    label: 'Main',
  },
  {
    path: '/sub1',
    label: 'Sub1',
    children: [
      { path: 'sub1-1', label: 'Sub1-1' },
      { path: 'sub1-2', label: 'Sub1-2' },
    ],
  },
  {
    path: '/sub2',
    label: 'Sub2',
    children: [
      { path: 'sub2-1', label: 'Sub2-1' },
      { path: 'sub2-2', label: 'Sub2-2' },
    ],
  },
  {
    path: '/sub3',
    label: 'Sub3',
  },
  {
    path: '/sub3/detail/:id',
  },
];
