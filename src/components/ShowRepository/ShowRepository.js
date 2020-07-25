import React from 'react';
import { Item,
  IconWrapper,
  RepoIcon,
  ContentWrapper,
  Link,
  Header,
  Bold,
  Description,
  Footer,
  Mr3,
  StarIcon,
  LawIcon } from './ShowRepositoryStyles';

export const ShowRepository = ({ repository }) => {
  return (
    <Item>
      <IconWrapper>
        <RepoIcon />
      </IconWrapper>

      <ContentWrapper>
        <Link href={repository.html_url} target='_blank'>
          <Header>
            { repository.owner.login }/
            <Bold>
              { repository.name }
            </Bold>
          </Header>
        </Link>

        <Description>
          { repository.description }
        </Description>

        <Footer>
          { repository.stargazers_count ?
            <Mr3>
              <StarIcon />
              { repository.stargazers_count }
            </Mr3>
            : '' }

          { repository.language ?
            <Mr3>
              { repository.language }
            </Mr3>
            : '' }

          { repository.license ?
            <Mr3>
              <LawIcon />
              { repository.license.name }
            </Mr3>
            : '' }
        </Footer>
      </ContentWrapper>
    </Item>
  );
};
