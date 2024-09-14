"use client";
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
// import webinarData from "@/data/webinar.json";

// interface Webinar {
//   id: number;
//   title: string;
//   description: string;
//   slug: string;
//   isFeatured: boolean;
//   image: string;
//   price: number;
// }

// const featuredWebinars = webinarData.webinars.filter(
//   (webinar: Webinar) => webinar.isFeatured
// );

function UpcomingWebinars() {

const featuredWebinars=[
    {
        title:'Understanding  Music Theory',
        description:'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug:'understanding-music-theory',
        isFeatured:true,
    },
    {
        title:'The Art of Songwriting',
        description:'Learn the craft of songwriting from experienced musiciains and songwriters.',
        slug:'the-art-of-songwriting',
        isFeatured:true,
    },

    {
        title:'Understanding  Music Theory',
        description:'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug:'understanding-music-theory',
        isFeatured:true,
    },
    {
        title:'The Art of Songwriting',
        description:'Learn the craft of songwriting from experienced musiciains and songwriters.',
        slug:'the-art-of-songwriting',
        isFeatured:true,
    },

    {
        title:'Understanding  Music Theory',
        description:'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug:'understanding-music-theory',
        isFeatured:true,
    },
]

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map( webinar=> (
                {
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }
        ))}
          />
        </div>
        <div className="text-center mt-10">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded-md border font-bold border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;