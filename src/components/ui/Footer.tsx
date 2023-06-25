import AnimatedComponents from "./AnimatedComponents";

function Footer() {
  return (
    <AnimatedComponents>
      <div className="py-5 text-center">
        {/* {Social Icons} */}
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()} Daffa Muhammad Faizan. All rights
          reserved.
        </p>
      </div>
    </AnimatedComponents>
  );
}

export default Footer;
