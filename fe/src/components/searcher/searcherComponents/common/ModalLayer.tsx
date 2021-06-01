import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSearcherDispatch } from '../../../../hooks/SearcherHook';
import { ModalLayerType, LayerSpecType } from '../../../../shared/interface';

const ModalLayer = ({ children, options }: ModalLayerType): React.ReactElement => {
    const { top, left, width, height } = options;
    const searcherDispatch = useSearcherDispatch();

    const closeAllLayer = (event: MouseEvent) => {
        const $target = event.target as HTMLElement;
        const $layer = $target.closest('.layer');
        const $searcher = $target.closest('.searcher');
        // 클릭한 지점이 layer 또는 searcher에 속하는 element가 아니면 레이어가 닫히도록.. 근데 좋은 방법인지는 모르겠다.
        // 상태를 전역에다가 두고 싶지 않지만 다른 body 클릭되면 레이어 상태가 바뀌어야 함 <- 그래서 리코일 쓰는건가..
        if ($layer !== null || $searcher !== null) return;
        searcherDispatch({ type: 'CLOSE_ALL' });
    };

    useEffect(() => {
        document.body.addEventListener('click', closeAllLayer);
        return () => document.body.removeEventListener('click', closeAllLayer);
    }, []);

    return (
        <Layer className="layer" top={top} left={left} width={width} height={height}>
            {children}
        </Layer>
    );
};

const Layer = styled.ul<LayerSpecType>`
    position: ${({ theme }) => theme.LayerTheme.position};
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    // border: ${({ theme }) => theme.LayerTheme.border};
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background: #fff;
    z-index: 111111110;
    border-radius: 40px;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
`;

export default ModalLayer;
