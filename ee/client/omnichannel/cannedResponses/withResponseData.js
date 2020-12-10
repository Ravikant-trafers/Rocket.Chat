import React, { useCallback } from 'react';

import { useReactiveValue } from '../../../../client/hooks/useReactiveValue';
import { useCannedResponsesCursor } from './useCannedResponsesCursor';

export const withResponseData = (WrappedComponent) => ({ _id, ...props }) => {
	const cursor = useCannedResponsesCursor(undefined, undefined, _id);

	const response = useReactiveValue(useCallback(() => cursor.fetch()?.shift(), [cursor]));

	return <WrappedComponent
		{...props}
		response={response}
	/>;
};
