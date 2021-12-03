import React, { PropsWithChildren } from 'react';
import { RelativeImportMargin } from '../../types/relative-import';
import { ResolvedImportMargin } from '2021/types/resolved-import';

type Props = PropsWithChildren<{
  className: string;
  globalMargin: GlobalMargin;
  relativeImportMargin: RelativeImportMargin;
  resolvedMargin: ResolvedImportMargin;
}>;

export const Button = ({ children, className }: Props) => {
  return <button className={className}>{children}</button>;
};
