import React from 'react';
import css from './MycoursesItem.module.css';
import { nanoid } from 'nanoid';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa6';
import { TbProgressCheck } from 'react-icons/tb';
import { MdQuiz } from 'react-icons/md';
import * as DB from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { Routes } from '@/constants/endpoints';
import { CourseImage } from '@/components/CourseImage/CourseImage';

type MyCoursesItemProps = {
  lang: string;
  course: DB.Course;
};

export const MyCoursesItem = ({ lang, course }: MyCoursesItemProps) => {
  return (
    <li key={nanoid()} className={`${css.item} ${css.itemVisible}`}>
      <div className={css.card}>
        <div className={css.infoBox} key={course.id}>
          <h2 className={css.title}>{course.name}</h2>
          <div className={css.dateBox}>
            <BsFillCalendarDateFill size={16} color="white" />{' '}
            <p className={css.date}>{course.updatedAt.toDateString()}</p>
          </div>

          <div className={`${css.spanLine} ${css.lineVisible}`}></div>
          <p className={css.description}>{course.description}</p>
          <div className={css.btnBox}>
            <Link className={css.btn} href={`${Routes.myCourses}/${course.id}`}>
              <FaPlay size={16} />
              Wybierz
            </Link>

            <div className={css.statsBox}>
              <TbProgressCheck size={24} />
              <p className={css.frame}>
                Ukończono 0/0
                {/* {course.progressData.sectionsCompleted}/
                      {course.progressData.sections.length} */}
              </p>
            </div>
            {/* <div className={css.statsBox}>
              <MdQuiz size={24} />
              <p className={css.frame}>
                Quiz 0/0
              </p>
            </div> */}
          </div>
        </div>

        <div className={css.imgBox}>
          <Image
            className={css.galleryImage}
            src={'https://picsum.photos/350'}
            alt="random pic"
            width={350}
            height={200}
            style={{ display: 'block', width: '100%', height: '100%' }}
          />

          {/* <CourseImage
            width={800}
            height={400}
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              borderRadius: '8px',
              marginTop: '1rem',
            }}
            courseId={course.id.toString()}
            imageName={course.images[0]}
            alt="Lesson Image"
          /> */}
        </div>
      </div>
    </li>
  );
};
