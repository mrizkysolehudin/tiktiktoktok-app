export const allPostsQuery = `*[_type == "post"] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
      postedBy->{
        _id,
        userName,
        image
      },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;

export const topicPostsQuery = (topic) => {
	const query = `*[_type == "post" && topic match '${topic}*'] {
      _id,
       caption,
         video{
          asset->{
            _id,
            url
          }
        },
        userId,
      postedBy->{
        _id,
        userName,
        image
      },
   likes,
  
      comments[]{
        comment,
        _key,
        postedBy->{
        _id,
        userName,
        image
      },
      }
    }`;

	return query;
};

export const searchPostsQuery = (searchTerm) => {
	const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
	return query;
};

export const singleUserQuery = (userId) => {
	const query = `*[_type == "user" && _id == '${userId}']`;

	return query;
};

export const allUsersQuery = () => {
	const query = `*[_type == "user"]`;

	return query;
};
