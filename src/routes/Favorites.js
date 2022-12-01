import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavoritesContext } from "../FavoritesProvider";

function Favorites() {
    const { favorites } = useContext(FavoritesContext)

    return (
        
        <Container>
            
            <Row>
                {favorites.map((pokemon) => (
                    <Col key={pokemon.name}>
                        <PokemonCard name={pokemon} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export { Favorites };