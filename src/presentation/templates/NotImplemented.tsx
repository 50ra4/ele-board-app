import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Link } from '@/components/navigation/Link/Link';

export const NotImplementedTemplate = () => {
  const router = useRouter();
  return (
    <Root>
      <Content>
        <h2>{`${router.pathname}はまだ実装前です。`}</h2>
        <h2>
          <Link href="/" replace={true}>
            ホームに戻る
          </Link>
        </h2>
      </Content>
    </Root>
  );
};

const Root = styled.div``;
const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > h2 {
    margin: 0 16px 16px;
  }
`;
