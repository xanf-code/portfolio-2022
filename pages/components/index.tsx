import { allComponents } from "../../.contentlayer/generated";
import Layout from "../../layout/Layout";
import ComponentCard from "../../ui/Components/ComponentCard";

const components = ({ component }: any) => {
  return (
    <Layout title="Components">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-4xl pb-3">Components</h1>
        <div className="space-y-2">
          <p className="pb-2 font-Quattro text-sm text-gray-600 dark:text-gray-200">
            We've all experienced this one interaction that you can't stop
            playing with because it just feels right.
          </p>
          <p className="pb-2 font-Quattro text-sm text-gray-500 dark:text-gray-300">
            I wish to build user interfaces and snippets because they are
            exciting and challenging to create.
          </p>
          <p className="pb-2 font-Quattro text-sm text-gray-400 dark:text-gray-400">
            This is an experimental laboratory of user interface patterns and
            interactions.
          </p>
          <p className="pb-2 font-Quattro text-sm text-gray-300 dark:text-gray-500">
            I hope these inspire you to build cool shit. 🖤
          </p>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 my-2 pb-5"></hr>
        {component.map((data) => {
          return (
            <div key={data._id}>
              <ComponentCard data={data} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default components;

export async function getStaticProps() {
  const component = allComponents.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { component } };
}
