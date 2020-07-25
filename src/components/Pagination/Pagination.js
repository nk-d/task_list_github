import React from 'react';
import { connect } from 'react-redux';
import { Paginate,
  PrevPage,
  NextPage,
  Gap,
  Page } from "./PaginationStyles";
import { searchActions } from "../../actions";

export const LegacyPagination = ({ dispatch, page, searchValue, currentPage, totalPages }) => {
  const toPage = onPage => {
    dispatch(searchActions.getSearchResult(searchValue, onPage));
  }

  const handleNumClick = (e, num) => {
    e.preventDefault();
    toPage(num);
  }

  const handlePrevClick = () => {
    toPage(currentPage - 1)
  }
  const handleNextClick = () => {
    toPage(currentPage + 1)
  }

  const pages = () => {
    let NumGroup = 3;
    let focusNumGroup = 5;
    let block = [];

    if ( totalPages <= 1 ){
      block.push('');
    } else {

      for(let p = 1 ; p <= totalPages ; p++) {
        if ( p === NumGroup && currentPage - 1 > focusNumGroup - 1) {
          block.push(<Gap key={p}>...</Gap>);
          p = currentPage - 2;
        }
        if ( p === (currentPage + NumGroup) && totalPages - currentPage > focusNumGroup){
          block.push(<Gap key={p}>...</Gap>);
          p = totalPages - NumGroup + 2;
        }
        block.push(<Page enabled={p === currentPage} key={p} onClick={ e => handleNumClick(e, p) } >{p}</Page>);
      }

    }
    return block;
  }

  return (
    <Paginate>
      <PrevPage disabled={currentPage === 1} onClick={handlePrevClick}>
        Previous
      </PrevPage>

      { pages() }

      <NextPage disabled={currentPage === totalPages} onClick={handleNextClick}>
        Next
      </NextPage>
    </Paginate>
  );
};

const mapStateToProps = state => {
  const { page, searchValue, currentPage, totalPages } = state.repos;
  return {
    page,
    searchValue,
    currentPage,
    totalPages
  };
}

export const Pagination = connect(mapStateToProps)(LegacyPagination);
