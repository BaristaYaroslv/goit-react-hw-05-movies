import { ThreeDots } from 'react-loader-spinner';
import { ContainerLoader } from './Loader.styled';

const Loader = () => {
  return (
    <ContainerLoader>
      <ThreeDots
        height="80"
        width="180"
        radius="9"
        color="#303f9f"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </ContainerLoader>
  );
};

export default Loader;
