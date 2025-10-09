This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<div className="flex flex-col items-center gap-20 text-[#8f7563] py-20 max-lg:py-10 max-lg:gap-10 max-md:gap-5">
        {/* LASTNAME */}
        <div className="flex items-center gap-5 font-bold text-5xl max-lg:text-2xl max-md:text-lg max-md:gap-2">
          <p>ESTEBAN</p>
          <p>-</p>
          <p>SIATRIZ</p>
        </div>
        {/* Parents of the Groom and the Bride*/}
        <div className="flex gap-5 whitespace-nowrap max-md:gap-2">
          {/* Parents of the Groom */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg text-right">
              PARENTS OF THE GROOM
            </h2>
            <div className="flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-sm text-right">
              <p className={`${cinzel.className}`}>Adriano Siatriz</p>
              <p className={`${crimsonPro.className} max-md:text-[12px]`}>
                (To be represented by: Jhosep Siatriz / Chris John Siatriz)
              </p>
              <p className={`${cinzel.className}`}>Cris Siatriz</p>
            </div>
          </div>
          <p className="text-5xl max-lg:text-2xl max-md:text-lg opacity-0">-</p>
          {/* Parents of the Bride */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg">
              PARENTS OF THE BRIDE
            </h2>
            <div
              className={`${cinzel.className} flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-sm`}
            >
              <p>Wilfredo Esteban</p>
              <p>Virgie Esteban</p>
            </div>
          </div>
        </div>
        {/* Principal Sponsors */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg text-center">
            PRINCIPAL SPONSORS
          </h2>
          <div className={`${cinzel.className} flex flex-col gap-2`}>
            <div className="flex gap-20 max-lg:text-center">
              <div className="flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-sm text-right">
                <span>Edgardo May-at</span>
                <span>Romeo Jaime</span>
              </div>
              <div className="flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-sm">
                <span>Jean May-at</span>
                <span>Selwin Jaime</span>
              </div>
            </div>
            <p className="text-3xl max-lg:text-lg max-md:text-sm text-center">
              Myra Balaoing
            </p>
          </div>
        </div>
        {/* Best Man and Maid of Honor */}
        <div className="flex gap-10">
          {/* Best Man */}
          <div className="bg-red-500 flex flex-col gap-2 text-right">
            <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg">
              BEST MAN
            </h2>
            <p
              className={`${cinzel.className} text-3xl max-lg:text-lg max-md:text-sm`}
            >
              Jan-Jan Siatriz
            </p>
          </div>
          {/* Maid of Honor */}
          <div className="bg-red-500 flex flex-col gap-2">
            <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg">
              MAID OF HONOR
            </h2>
            <p
              className={`${cinzel.className} text-3xl max-lg:text-lg max-md:text-sm`}
            >
              Mary Joy Esteban
            </p>
          </div>
        </div>
        {/* Groomsmen and Bridesmaids */}
        <div className="flex gap-10">
          {/* Groomsmen */}
          <div className="text-center">
            <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg">
              GROOMSMEN
            </h2>
            <div
              className={`${cinzel.className} flex flex-col text-3xl max-lg:text-lg max-md:text-sm`}
            >
              <span>Regie Rico Michael</span>
              <span>Oski Alfonso</span>
              <span>Jerico Esteban</span>
              <span>Gerald Esteban</span>
            </div>
          </div>
          {/* Bridesmaids */}
          <div className="text-center">
            <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg">
              BRIDESMAIDS
            </h2>
            <div
              className={`${cinzel.className} flex flex-col text-3xl max-lg:text-lg max-md:text-sm`}
            >
              <span>Jude Ann Siatriz</span>
              <span>Jenny Siatriz Fabro</span>
              <span>Maria Andrea Esteban</span>
              <span>Jaycel Siatriz</span>
            </div>
          </div>
        </div>
      </div>
