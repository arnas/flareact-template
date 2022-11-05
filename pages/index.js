
export async function getEdgeProps() {
  const posts = {data:"abc"};

  return {
    props: {
      posts,
    },
  };
}


export default function Index(props) {
  return (
    <h1>
      {props.posts}
    </h1>
  );
}
