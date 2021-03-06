import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import { createBootstrapComponent } from './ThemeProvider';
import PopoverTitle from './PopoverTitle';
import PopoverContent from './PopoverContent';

const propTypes = {
  /**
   * @default 'popover'
   */
  bsPrefix: PropTypes.string,

  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  /**
   * Sets the direction the Popover is positioned towards.
   *
   * > This is generally provided by the `Overlay` component positioning the popover
   */
  placement: PropTypes.oneOf(['auto', 'top', 'bottom', 'left', 'right']),

  /**
   * An Overlay injected set of props for positioning the popover arrow.
   *
   * > This is generally provided by the `Overlay` component positioning the popover
   */
  arrowProps: PropTypes.shape({
    ref: PropTypes.any,
    style: PropTypes.object,
  }),

  /**
   * When this prop is set, it creates a Popover with a Popover.Content inside
   * passing the children directly to it
   */
  content: PropTypes.bool,

  /** @private */
  innerRef: PropTypes.any,

  /** @private */
  scheduleUpdate: PropTypes.func,
  /** @private */
  outOfBoundaries: PropTypes.bool,
};

const defaultProps = {
  placement: 'right',
};

function Popover({
  bsPrefix,
  innerRef,
  placement,
  className,
  style,
  children,
  content,
  arrowProps,
  scheduleUpdate: _,
  outOfBoundaries: _1,
  ...props
}) {
  return (
    <div
      role="tooltip"
      ref={innerRef}
      style={style}
      x-placement={placement}
      className={classNames(className, bsPrefix, `bs-popover-${placement}`)}
      {...props}
    >
      <div className="arrow" {...arrowProps} />
      {content ? <PopoverContent>{children}</PopoverContent> : children}
    </div>
  );
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

const DecoratedPopover = createBootstrapComponent(Popover, 'popover');

DecoratedPopover.Title = PopoverTitle;
DecoratedPopover.Content = PopoverContent;

export default DecoratedPopover;
