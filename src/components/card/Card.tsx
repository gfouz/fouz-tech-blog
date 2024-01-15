export type Meta = {
  src?: string;
  alt?: string;
  title?: string;
  author?: string;
  date?: string | number;
};

export type Post = {
  meta: Meta;
  slug?: string;
};

export type PostCard = {
  post: Post;
};

export default function Card({ post }: PostCard) {
  const _date = post.meta.date !== undefined ? post.meta.date : "";
  const date = new Date(_date).toDateString();
  return (
    <section className="p-2 bg-indigo-950 hover:bg-[#222222] cursor-pointer min-h-[250px] rounded-lg">
      <figure className="overflow-hidden">
        <img
          className="max-w-[100%] h-auto hover:scale-[1.2] transition-all ease-in-out duration-1000"
          src={post.meta?.src}
          alt={post.meta?.alt}
        />
      </figure>
      <article className="flex flex-col justify-center    min-h-[150px] ">
        <h3 className="text-neutral-100">{post.meta?.title}</h3>
        <div className='pt-2'>
        <p className='text-[#999999] text-xs'>Author: {post.meta?.author}</p>
        <p className='text-[#FF79C6] text-xs m-1'>Date: {date}</p>
        </div>
      </article>
    </section>
  );
}

//