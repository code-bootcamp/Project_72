import React from 'react';
import Comments from '../../../src/components/units/screens/comment/comments.container';
const CommentsPage = (props: any) => {
  const BoardId = props.route.params.item._id;

  return <Comments BoardId={BoardId} />;
};
export default CommentsPage;
