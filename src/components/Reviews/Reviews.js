import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContextFetchFilm } from 'components/ContextFetchFilm/ContextFetchFilm';
import Loader from 'components/Loader';
import ReviewsList from 'components/ReviewsList';

const Reviews = () => {
  // * Беру контекст для роботи із APIзапросами
  const { apiThemoviedb } = useContextFetchFilm();
  const [showLoad, setShowLoad] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    function normalizeReviews(information) {
      const result = information.map(element => {
        return {
          name: element.author_details.username,
          content: element.content,
        };
      });

      return result;
    }

    async function fetchInformation() {
      setShowLoad(true);
      try {
        const information = await apiThemoviedb.fetchReviewsFromFilm(
          movieId,
          controller
        );

        setReviews(normalizeReviews(information.results));
      } catch {
        setReviews([]);
        console.log('Error fetch');
      } finally {
        setShowLoad(false);
      }
    }

    fetchInformation();

    return () => {
      controller.abort();
    };
  }, [apiThemoviedb, movieId]);

  return (
    <>
      {showLoad && <Loader />}
      {!showLoad && reviews.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {!showLoad && reviews.length > 0 && <ReviewsList reviews={reviews} />}
    </>
  );
};

export default Reviews;
