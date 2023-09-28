# Michelle Lau's site

Personal website built with [Next.js](https://nextjs.org/).

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- (main)
  - / (Dev work)
  - /language (Language learning)
  - /about
  - /blog (TODO)
- /photography (TODO)

## Issues

Production build on Vercel suddenly stopped working as the `content` folder cannot be found.

```
[Error: ENOENT: no such file or directory, scandir '/var/task/content/projects'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/var/task/content/projects'
}
```

- [Next.js API routes (and pages) should support reading files #8251](https://github.com/vercel/next.js/issues/8251)


## Credits

See [./CREDITS](./CREDITS.md) for full list.
