import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
export default function Description(job:any) {
  return (
    <section className="my-4  flex h-fit flex-col rounded-md bg-stone-200 p-6">
      <h3 className="text-xl">Job description</h3>
      <article className="prose ">
        Software Engineer : Full Stack Web Developer Primary responsibility
        would be conceptualising, designing, developing, testing & deploying web
        applications based upon PHP, MongoDBMySQL, Javascript, NodeJS, HTMLCSS &
        React JS. Job Duties Determines feasibility by evaluating analysis,
        requirements and proposed solutions. Documents and demonstrates
        solutions by developing documentation, flowcharts, layouts, diagrams,
        code comments and clear code. Develops software solutions by studying
        information needs; conferring with architect; studying systems flow,
        data usage, and work processes; investigating problem areas; following
        the software development lifecycle. Updates job knowledge by studying
        state-of-the-art development tools, programming techniques, and
        computing equipment; participating in educational opportunities; reading
        professional publications; maintaining personal networks. Protects
        operations by keeping information confidential. Provides information by
        collecting, analysing & summarizing development issues. Accomplishes
        engineering & organization mission by completing identified results as
        needed. Job Requirements MCAMCSB.E.B.Tech from an accredited university
        with good academics Strong analytical & problem solving skills Relevant
        experience level ~1-3 years, with demonstrable portfolio of live
        websites Expert in PHP programing and frameworks with demonstrable
        portfolio Proficient in data bases (MongoDBMySQL), creating database
        schemas supporting business processes Expert in MVC Patterns Experienced
        in NodeJS, Ajax , JavaScriptjQuery Good experience in front end
        technologies like HTML, CSS, BootStrap & Angular 2+ or React JS Exposure
        to cloud hosting of backend such as on AWS or Azure. Good experience in
        GIT processes and way of working Excellent verbal & written
        communication skills and excellent Team Player.
        <div className="font-semibold">
        <div className="mt-4 ">
          Role: <span className="font-normal">Back End Developer</span>
        </div>
        <div>
          Industry Type: <span className="font-normal"> Recruitment / Staffing</span>
        </div>
        <div>
          Department: <span className="font-normal"> Engineering - Software & QA</span>
        </div>
        <div>
          Employment Type: <span className="font-normal">Full Time, Permanent</span>
        </div>
        <div>
          Role Category: <span className="font-normal"> Software Development</span>
        </div>
        <div className="mt-4">
          Education:
          <span className="font-normal">UG: Any Graduate PG: Post Graduation Not Required</span>
        </div>
        </div>
      </article>
        <div className="flex flex-wrap gap-2 my-4">
            <span className="bg-slate-100 p-1  rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
            <span className="bg-slate-100 p-1 rounded-xl">Backend</span>
        </div>
        <div className="border-t-2 p-2">
            <ul className="flex gap-4">
            <li>
                  <a href="#">
                    <FaTwitter size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin size={25} />
                  </a>
                </li>
            </ul>
        </div>
    </section>
  );
}
