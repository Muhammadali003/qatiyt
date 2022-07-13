import './products';
import { useEffect } from 'react';
import { Button, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Appa(a) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <Card className='h-100' data-aos="zoom-in-down">
            {a.data.discount !== null ? <div className='skidka'>10%</div> : null}
            <div style={{
                width: "100%",
                height: 200,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(https://api.office.promarket.besoft.kg/${a.data.main_image.path.original})`,
            }} />
            <Card.Body>
                <Card.Title className="text-truncate">{a.data.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button size="md" className='sena' variant="primary">{a.data.discount === null ? a.data.price : <>{a.data.price - (a.data.price * a.data.discount / 100)} Сом,<s>{a.data.price} Сом</s> </>} </Button>
            </Card.Body>
        </Card>

    );
}

export default Appa;