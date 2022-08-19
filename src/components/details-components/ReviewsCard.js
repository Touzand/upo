import {api} from '../../services/api'
import styled from "styled-components";
import '../../index.css'

const ReviewsCardContainer = styled.div`
margin:.5rem;
padding:1rem;
border:.5px solid grey;
border-radius:.25rem;

h3{
margin:0;
}

.username{
color:var(--primal-color) ;
}
`;

const ReviewsCard = ( { props } ) =>(

  <ReviewsCardContainer>
    <div>
      <h3>{props.author}</h3>
      <spa className='username'>{`@${ props.author_details.username }`}</spa>
      <p>{props.content}</p>
    </div>
  </ReviewsCardContainer>

)
export default ReviewsCard
