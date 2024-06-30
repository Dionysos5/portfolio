import React from "react";
import Image from "next/image";
import ProfilePicture from "../components/profile.png";
import Link from "next/link";

export default function About() {
  return (
    <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
      <Image
        src={ProfilePicture}
        alt="Profile picture"
        width={512}
        height={320}
        className="w-full h-96 bg-red-200 rounded-md"
      />
      <p className="leading-relaxed text-sm">
        Hi there! I'm Denis, a full-stack developer at Harvy. In my role, I
        focus on building, testing, and maintaining robust REST APIs and user
        interfaces. I also occasionally work on DevOps tools to improve
        developer productivity and efficiency. Based in our Paris office, I'm
        passionate about creating innovative solutions that make a real impact.
      </p>
      <p className="leading-relaxed text-sm">
        When I'm not coding, you can find me immersed in a wide range of books,
        from history and philosophy to the latest advancements in technology. I
        also enjoy playing guitar, learning new languages, and challenging
        myself at chess.
      </p>
      <p className="leading-relaxed text-sm">
        Feel free to connect with me on{" "}
        <Link
          href="https://github.com/your-github-username"
          className="underline"
        >
          GitHub
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.linkedin.com/in/your-linkedin-username"
          className="underline"
        >
          LinkedIn
        </Link>{" "}
        to learn more about my work and interests.
      </p>
      <p className="leading-relaxed text-sm">Experience:</p>
      <table className="leading-relaxed text-sm">
        <tbody>
          <tr>
            <td>2023 - Present</td>
            <td>
              Full-stack developer <br /> Harvy
            </td>
          </tr>
          <tr>
            <td>2023</td>
            <td>
              Full-stack developer intern
              <br /> Orange Business
            </td>
          </tr>
          <tr>
            <td>2022</td>
            <td>
              Full-stack developer intern
              <br /> Phealing
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
