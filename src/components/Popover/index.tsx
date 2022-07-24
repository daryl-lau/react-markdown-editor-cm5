/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import RcTooltip, { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import './index.css';
import { BuildInPlacements } from 'rc-trigger';
import getPlacements from './placements';

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export type TriggerType = string | string[];

export interface PopoverProps extends Omit<TooltipProps, 'overlay'> {
  content: React.ReactElement | (() => React.ReactElement) | null;
  children: React.ReactElement;
  trigger?: TriggerType;
  transitionName?: string;
  placement?: TooltipPlacement;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  builtinPlacements?: BuildInPlacements;
  arrowPointAtCenter?: boolean;
  autoAdjustOverflow?: boolean;
  prefixCls?: string;
}

const Popover: React.FC<PopoverProps> = (props) => {
  const { content, children, trigger, transitionName, mouseEnterDelay, mouseLeaveDelay, ...rest } = props;
  const getContent = () => {
    if (typeof content === 'function') {
      return content();
    }
    return content;
  };
  const getTooltipPlacements = () => {
    const { builtinPlacements, arrowPointAtCenter, autoAdjustOverflow } = props;
    return (
      builtinPlacements ||
      getPlacements({
        arrowPointAtCenter,
        autoAdjustOverflow,
      })
    );
  };
  // 动态设置动画点
  const onPopupAlign = (domNode: HTMLElement, align: any) => {
    const placements: any = getTooltipPlacements();
    // 当前返回的位置
    const placement = Object.keys(placements).filter(
      (key) => placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1],
    )[0];
    if (!placement) {
      return;
    }
    // 根据当前坐标设置动画点
    const rect = domNode.getBoundingClientRect();
    const transformOrigin = {
      top: '50%',
      left: '50%',
    };
    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = `${rect.height - align.offset[1]}px`;
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = `${-align.offset[1]}px`;
    }
    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = `${rect.width - align.offset[0]}px`;
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = `${-align.offset[0]}px`;
    }
    domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
  };
  return (
    <RcTooltip
      overlay={getContent}
      trigger={trigger || 'click'}
      prefixCls="popover"
      transitionName={transitionName}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      builtinPlacements={getTooltipPlacements()}
      onPopupAlign={onPopupAlign}
      arrowContent={<div className="popover-arrow-inner" />}
      {...rest}
    >
      {children}
    </RcTooltip>
  );
};

Popover.defaultProps = {
  prefixCls: 'popover',
  placement: 'top' as TooltipPlacement,
  transitionName: 'popover-zoom',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
};

export default Popover;
