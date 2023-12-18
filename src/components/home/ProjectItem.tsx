function ProjectItems
({
  title,
  status,
  imgUrl,
  stack,
  link,
  target,
}: {
  title: string;
  status: string;
  imgUrl: string;
  stack: string[];
  link: string;
  target: string;
}) {
  return (
    <>
      <a
        href={link}
        target={target}
        rel="noopener noreferrer"
        className="shadow-lg border-2 dark:border-[#141414] dark:shadow-lg rounded-xl overflow-hidden hover:scale-105 hover:shadow-cyan-200 hover:dark:shadow-cyan-400 duration-150"
      >
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl dark:text-stone-300 font-semibold ">
            {title}
          </h3>
          {status == "ONLINE" ? (
            <span className="inline-block border-2 border-green-500 text-green-500 dark:border-[#39FF14] dark:text-[#39FF14] px-2 py-1 mb-3 md:mb-4 mt-2 md:mt-3 font-semibold text-sm dark:shadow-stone-950 rounded-md">
              {status}
            </span>
          ) : (
            <span className="inline-block border-2 border-[#FF3131] text-[#FF3131] px-2 py-1 mb-3 md:mb-4 mt-2 md:mt-3 font-semibold text-sm dark:shadow-stone-950 rounded-md">
              {status}
            </span>
          )}
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
            {stack.map((item) => (
              <span
                className="inline-block px-2 py-1 font-semibold shadow-lg dark:shadow-stone-950 rounded-md"
                key={item}
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </a>
    </>
  );
}

export default ProjectItems
;
