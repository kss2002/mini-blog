import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
  background: #86d1a8;
  :hover {
    background: #e8e4e4;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;

function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
