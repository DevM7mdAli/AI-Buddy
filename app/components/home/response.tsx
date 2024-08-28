import Markdown from "react-markdown";

type ResponseProps = {
  respond: string;
  request: string;
  index: number;
};

export default function Response({ respond , request , index }: ResponseProps) {
  return (
    <div className="flex flex-col gap-y-12 text-md sm:text-lg" id={`answer${index}`}>
      <div className="flex flex-row-reverse gap-x-2 items-start">
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content w-10 rounded-full">
          <span className="text-xs">You</span>
        </div>
      </div>
      <h1 className="pt-1 border-neutral border p-2 rounded-lg max-w-full h-full text-end">{request !== '' ? request : "..." }</h1>
      </div>

      
      <div className="flex gap-x-2 items-start">
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content w-8 rounded-full">
          <span className="text-xs">AI</span>
        </div>
      </div>
      <div className="pt-1 border-neutral border p-2 rounded-lg max-w-full h-full">{respond ? <Markdown>{respond}</Markdown> : <span className="loading loading-infinity loading-lg align-middle"></span>}</div>
      </div>
    </div>
  );
}