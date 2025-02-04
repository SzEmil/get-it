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
import { formatInvoiceDate } from '@/helpers/date';
import { Typography } from '@/components/Typography/Typohraphy';
import { List, ListItem } from '@mantine/core';

type MyCoursesItemProps = {
  lang: string;
  course: DB.Course;
  progress: DB.UserProgress | null;
};

export const MyCoursesItem = ({
  lang,
  course,
  progress,
}: MyCoursesItemProps) => {
  // Oblicz procent ukończenia
  const completedLessons = Array.isArray(progress?.completedLessons)
    ? progress.completedLessons.filter(
        (lesson: any) => lesson.status === DB.CourseProgressStatus.COMPLETED
      ).length
    : 0;

  // Łączna liczba lekcji w kursie
  const totalLessons = Array.isArray(course.lessons)
    ? course.lessons.length
    : 0;

  // Oblicz procent ukończenia
  const progressPercentage =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const imageUrl =
    course.images.length > 0
      ? `/assets/coursesAssets/${course.id}/${course.images[0]}`
      : null;
  return (
    <li
      key={nanoid()}
      className={`${css.item} ${css.itemVisible}`}
      style={{ listStyle: 'none' }}
    >
      <div className={css.card}>
        <div className={css.infoBox} key={course.id}>
          <h2 className={css.title}>{course.name}</h2>
          <div className={css.dateBox}>
            <BsFillCalendarDateFill size={16} color="white" />
            <p className={css.date}>
              Ostatnia aktywność:{' '}
              {formatInvoiceDate(progress?.updatedAt) || 'Brak aktywności'}
            </p>
          </div>

          <div className={`${css.spanLine} ${css.lineVisible}`}></div>
          <p className={css.description}>{course.description}</p>
          <Typography>Co znajdziesz w kursie?</Typography>
          <List c={'white'}>
            <ListItem>
              Filmy instruktażowe: Każdy krok dokładnie wyjaśniony.
            </ListItem>
            <ListItem>Materiały uzupełniające wiedzę z wideo.</ListItem>
            <ListItem>
              Przykłady praktyczne: Realne zastosowania Flowise AI.
            </ListItem>
          </List>

          <Typography>
            Nie zapomnij, że masz pełen dostęp do kursu przez cały czas.
            Powodzenia i miłej nauki!
          </Typography>

          <div className={css.btnBox}>
            <Link className={css.btn} href={`${Routes.myCourses}/${course.id}`}>
              <FaPlay size={16} />
              Wybierz
            </Link>

            <div className={css.statsBox}>
              <TbProgressCheck size={24} />
              <p className={css.frame} style={{ color: 'white' }}>
                Ukończono {completedLessons}/{totalLessons} (
                {progressPercentage}%)
              </p>
            </div>
          </div>
        </div>

        {/* <div className={css.imgBox}>
          <Image
            className={css.galleryImage}
            src={imageUrl ??'https://picsum.photos/350'}
            alt="random pic"
            width={350}
            height={200}
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </div> */}
      </div>
    </li>
  );
};
