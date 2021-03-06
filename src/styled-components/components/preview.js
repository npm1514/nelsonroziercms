import styled from 'styled-components';
import { gold, red, yellow } from '../colors';
export const Preview = styled.div`
  width: 100%;
  text-align: center;
  hr {
    margin: 36px 0;
  }
  h2.previewHeader {
    background-color: #8d8d8d8d;
    padding: 12px 0;
  }
  h2.previewTop {
    background-color: #000;
    padding: 12px 0;
    color: #fff;
  }
  .previewBlock {
    width: calc(100% - 32px);
    padding: 40px 16px;
    max-width: 900px;
    margin: auto;
    text-align: center;
    position: relative;
    display: block;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
export const BottomBox = styled.div`
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-collapse: collapse;
  width: 100%;
  margin-top: 24px;
`;

export const BoxTitle = styled.div`
  background-color: ${red};
  padding: 3px 0;
  width: calc(100% - 8px);
  color: #fff;
  border: 4px solid #fff;
`;

export const BoxContent = styled.div`
  text-align: left;
  border-top: 1px solid #dfdfdf;
  padding: 8px;
  a {
    text-decoration: underline;
    display: block;
    color: #333;
    font-size: 15px;
    line-height: 27px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 13px;
  }
  .readMore {
    text-decoration: none;
    margin-top: 12px;
  }
  i {
    color: {red};
  }
  a:hover i {
    color: #333;
  }
`;
