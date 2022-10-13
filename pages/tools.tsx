import { NextPage } from "next";
import Image from "next/image";
import { tools } from "../data/toolsData";
import Layout from "../layout/Layout";

const Tools: NextPage = () => {
  return (
    <Layout title="Tools">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-4xl pb-3">Tools</h1>
        <div className="space-y-2">
          <p className="pb-2 font-Quattro text-sm text-gray-600 dark:text-gray-200">
            This is the Collection of tools and components that I use in my
            projects that helps me to build a better website and increase my
            productivity.
          </p>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2 pb-5"></hr>
        <div className="space-y-2 w-full">
          {tools.map((tool: any) => {
            return (
              <div
                className="hover:bg-gray-200 cursor-pointer rounded-md p-3"
                key={tool.name}
              >
                <a href={tool.uri} target="__blank">
                  <div className="flex items-center">
                    <div className="w-46 h-46 items-center flex bg-[#fcf7f7] p-1.5 rounded-md">
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col pl-4">
                      <h1 className="font-[450]">{tool.name}</h1>
                      <p className="font-Quattro text-sm text-gray-600 dark:text-gray-200">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
