function ExperienceItem({
  year,
  organization,
  position,
  details,
}: {
  year: string;
  organization: string;
  position: string;
  details: string;
}) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-400 dark:border-stone-600">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border border-stone-400 dark:border-stone-400 dark:bg-stone-600" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-cyan-500 dark:bg-cyan-500 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-200">
            {organization}
          </h3>
          <div className="text-lg font-normal text-stone-400 dark:text-stone-400">
            {position}
          </div>
          <p className="my-2 text-base text-justify font-normal text-stone-500 dark:text-stone-300">
            {details}
          </p>
        </div>
      </li>
    </ol>
  );
}

export default ExperienceItem;
