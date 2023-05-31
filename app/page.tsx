import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://apisocial.axendev.net/graphql", {
    method: "POST",
    credentials: "include",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query Post_posts_show($pagination: PaginationOffset!) {
  post_posts_show(pagination: $pagination) {
    data {
      author {
        avatar_color
        first_name
        group_id
        avatar {
          created
          description
          ext
          file
          file_size
          height
          id
          location
          member_id
          mimetype
          modify
          module
          module_id
          position
          width
        }
        last_name
        member_id
        name
        name_seo
      }
      comments_access
      id
      text
      date
      visible
      attachments {
        files {
          description
          ext
          file
          file_size
          id
          location
          member_id
          module
          position
          created
          modify
          height
          mimetype
          width
          module_id
        }
        totalCount
      }
      totalCommentsCount
      reactions {
        currentUserReaction {
          id
          member_id
          module
          module_id
          type
        }
        totalCount
        types {
          count
          type
        }
      }
      text_short
    }
    pagination {
      count
      last
      nextPage
      totalCount
    }
  }
}
    `,
      variables: {
        pagination: {
          limit: 10,
        },
      },
    }),
  });

  const json = await res.json();

  if (json.errors) {
    const { message } = json.errors[0];

    throw new Error(message);
  }

  return json.data;
};

export default async function Page() {
  const test = await getData();

  console.log(test);

  return <Link href="/workspaces">Workspaces</Link>;
}
