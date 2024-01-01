import AnimatedComponents from "../animations/AnimatedComponents";

function Footer() {
  return (
    <AnimatedComponents>
      <div className="py-5 text-center">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()} Daffa Muhammad Faizan. All rights
          reserved.
        </p>
      </div>
    </AnimatedComponents>
  );
}

export default Footer;
