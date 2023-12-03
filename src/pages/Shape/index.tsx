import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LayoutTemplate from "components/layout/LayoutTemplate";
import { Button, Divider, Col, Row } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const WrapperMoveButton = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
const ShapeElm = styled.div``;
const ButtonDes = styled.div`
  font-size: 12px;
  background-color: #6eda78;
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 0);
`;
const MoveButton = styled(Button)`
  height: max-content;
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const ShapeButton = styled(Button)`
  height: max-content;
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;
const HomeButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-right: 50px solid #555;
  border-bottom: 25px solid transparent;
`;
const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-left: 50px solid #555;
  border-bottom: 25px solid transparent;
`;
const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #555;
`;
const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 50px solid #555;
`;

const Shape: FC = () => {
  const { t } = useTranslation("shape");
  const history = useHistory();
  const [grid, setGrid] = useState(true);
  const [shapeList, setShapeList] = useState([
    "square",
    "circle",
    "oval",
    "parallelogram",
    "rectangle",
    "trapezoid",
  ]);

  const onMovePosition = () => {
    setGrid(!grid);
  };

  const onMoveLeft = () => {
    const shift = shapeList.shift() || "";
    setShapeList((oldArray) => [...oldArray, shift]);
  };

  const onMoveRight = () => {
    const pop = shapeList.pop() || "";
    setShapeList((oldArray) => [pop, ...oldArray]);
  };

  const onRandom = () => {
    setShapeList([...shuffle(shapeList)]);
  };

  const shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <LayoutTemplate title={t("shape.title")}>
      <Wrapper>
        <HomeButton onClick={() => history.push("/")}>
          {t("shape.home")}
        </HomeButton>
        <WrapperMoveButton>
          <MoveButton onClick={onMoveLeft}>
            <ButtonDes>{t("shape.move_shape")}</ButtonDes>
            <TriangleLeft />
          </MoveButton>
          <MoveButton onClick={onMovePosition}>
            <ButtonDes>{t("shape.move_position")}</ButtonDes>
            <TriangleUp />
            <TriangleDown />
          </MoveButton>
          <MoveButton onClick={onMoveRight}>
            <ButtonDes>{t("shape.move_shape")}</ButtonDes>
            <TriangleRight />
          </MoveButton>
        </WrapperMoveButton>
        <Divider />
        <Row justify={grid ? "end" : "center"} gutter={[16, 16]}>
          <Col span={6}>
            <ShapeButton onClick={onRandom}>
              <ShapeElm className={shapeList[0]} />
            </ShapeButton>
          </Col>
          <Col span={6}>
            <ShapeButton onClick={onRandom}>
              <ShapeElm className={shapeList[1]} />
            </ShapeButton>
          </Col>
          <Col span={6}>
            <ShapeButton onClick={onRandom}>
              <ShapeElm className={shapeList[2]} />
            </ShapeButton>
          </Col>
        </Row>
        <Row justify={grid ? "center" : "end"} gutter={[16, 16]}>
          <Col span={6}>
            <ShapeButton onClick={onRandom}>
              <ShapeElm className={shapeList[3]} />
            </ShapeButton>
          </Col>
          <Col span={6}>
            <ShapeButton onClick={onRandom}>
              <ShapeElm className={shapeList[4]} />
            </ShapeButton>
          </Col>
          <Col span={6}>
            <ShapeButton onClick={onRandom}>
              <ShapeElm className={shapeList[5]} />
            </ShapeButton>
          </Col>
        </Row>
      </Wrapper>
    </LayoutTemplate>
  );
};
export default Shape;
