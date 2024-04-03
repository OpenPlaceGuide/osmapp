import styled from 'styled-components';
import React from 'react';
import { useClimbingContext } from './contexts/ClimbingContext';
import {
  convertGrade,
  getDifficultyColor,
  getGradeSystemName,
} from './utils/routeGrade';
import { PanelLabel } from './PanelLabel';
import { ContentContainer } from './ContentContainer';

const MAX_HEIGHT = 100;
const GRADE_SYSTEM = 'uiaa';

const Container = styled.div`
  margin: 16px 12px 12px;
`;

const Items = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

const NumberOfRoutes = styled.div`
  text-align: center;
  font-size: 9px;
`;
const Column = styled.div``;
const DifficultyLevel = styled.div<{ isActive: boolean }>`
  text-align: center;
  color: ${({ color, isActive, theme }) =>
    isActive ? color : theme.palette.secondary.main};
  font-weight: bold;
  font-size: 11px;
`;

const Chart = styled.div<{ ratio: number; color: string }>`
  height: ${({ ratio }) => MAX_HEIGHT * ratio}px;
  background-color: ${({ color, theme, ratio }) =>
    ratio === 0 ? theme.palette.secondary.main : color};
  width: 24px;
  border-radius: 2px;
`;

const getGroupingLabel = (label: string) => String(parseFloat(label));

export const RouteDistribution = () => {
  const { routes, gradeTable } = useClimbingContext();
  if (routes.length === 0) return null;

  const prepareOccurrenceStructure = () =>
    gradeTable?.[GRADE_SYSTEM].reduce<{ [grade: string]: number }>(
      (acc, grade) => ({
        ...acc,
        [getGroupingLabel(grade)]: 0,
      }),
      {},
    );

  const getOccurrences = () => {
    const structure = prepareOccurrenceStructure();
    return routes.reduce((acc, route) => {
      if (!route.difficulty) return acc;
      const convertedGrade = convertGrade(
        gradeTable,
        route.difficulty.gradeSystem,
        GRADE_SYSTEM,
        route.difficulty.grade,
      );
      const newGrade = getGroupingLabel(convertedGrade);
      if (!structure) return {};
      const updatedKey = Object.keys(structure).find((grade) => {
        if (grade === newGrade) return true;
        return false;
      });
      if (updatedKey === undefined) return acc;
      return { ...acc, [updatedKey]: acc[updatedKey] + 1 };
    }, structure);
  };

  const routeOccurrences = getOccurrences();

  if (!routeOccurrences) return null;

  const heightsRatios = Object.keys(routeOccurrences).map((key) => ({
    grade: key,
    ratio: routeOccurrences[key] / routes.length,
  }));

  return (
    <>
      <PanelLabel addition={getGradeSystemName(GRADE_SYSTEM)}>
        Routes distribution
      </PanelLabel>
      <Container>
        <ContentContainer>
          <Items>
            {heightsRatios.map((heightRatioItem) => {
              const color = getDifficultyColor(gradeTable, {
                gradeSystem: 'uiaa',
                grade: heightRatioItem.grade,
              });
              const numberOfRoutesKey = Object.keys(routeOccurrences).find(
                (key) => key === heightRatioItem.grade,
              );
              const numberOfRoutes = routeOccurrences[numberOfRoutesKey];
              const isColumnActive = numberOfRoutes > 0;
              return (
                <Column>
                  {numberOfRoutes > 0 && (
                    <NumberOfRoutes>{numberOfRoutes}x</NumberOfRoutes>
                  )}
                  <Chart color={color} ratio={heightRatioItem.ratio} />

                  <DifficultyLevel color={color} isActive={isColumnActive}>
                    {heightRatioItem.grade}
                  </DifficultyLevel>
                </Column>
              );
            })}
          </Items>
        </ContentContainer>
      </Container>
    </>
  );
};
