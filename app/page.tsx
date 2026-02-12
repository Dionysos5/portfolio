import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GitHubActivity } from "./components/GitHubActivity";

export default function Home() {
  return (
    <div>
      <article className="flex flex-col gap-6 max-w-screen-sm ">
        <h3 className="text-base font-semibold ">About me</h3>
        <p className="leading-relaxed text-sm text-justify">
          Hi there! I'm Denis, a full-stack developer at Harvy. In my role, I
          focus on building, testing, and maintaining robust REST APIs and user
          interfaces. I also occasionally work on DevOps tools to improve
          developer productivity and efficiency. Based in our Paris office, I'm
          passionate about creating innovative solutions that make a real
          impact.
        </p>
        <p className="leading-relaxed text-sm text-justify">
          When I'm not coding, you can find me immersed in a wide range of
          books, from history and philosophy to the latest advancements in
          technology. I also enjoy playing guitar, learning new languages, and
          challenging myself at chess.
        </p>
        <p className="leading-relaxed text-sm">
          Feel free to connect with me on{" "}
          <Link href="https://github.com/dionysos5" className="underline">
            GitHub
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.linkedin.com/in/denis-bakhoum"
            className="underline"
          >
            LinkedIn
          </Link>{" "}
          to learn more about my work and interests.
        </p>

        <div className="flex justify-center">
          <Link
            className="w-32 flex justify-center items-center py-3 px-5 cursor-pointer text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none "
            href={"/projects"}
          >
            My Projects
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
        <p className="leading-relaxed text-sm">Experience:</p>
        <table className="leading-relaxed text-sm">
          <tbody>
            <tr>
              <td className="font-semibold">2023 - Present</td>
              <td>
                Full-stack developer, <br /> Harvy
              </td>
            </tr>
            <tr>
              <td className="font-semibold">2023</td>
              <td>
                Full-stack developer intern,
                <br /> Orange Business
              </td>
            </tr>
            <tr>
              <td className="font-semibold">2022</td>
              <td>
                Full-stack developer intern,
                <br /> Phealing
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Download full resume
          </a>
        </div>

        <h3 className="text-base font-semibold pt-4">GitHub Activity</h3>
        <GitHubActivity />
      </article>
    </div>
  );
}
