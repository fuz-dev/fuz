// TODO maybe this module should be `util.ts` or `dom.ts`

/**
 * Stops an event from bubbling and doing default behavior.
 * @param event
 * @param immediate Defaults to `true` to use `stopImmediatePropagation` over `stopPropagation`.
 * @param preventDefault Defaults to `true`.
 * @returns
 */
export const swallow = <
	T extends Pick<Event, 'preventDefault' | 'stopPropagation' | 'stopImmediatePropagation'>,
>(
	event: T,
	immediate = true,
	preventDefault = true,
): T => {
	if (preventDefault) event.preventDefault();
	if (immediate) {
		event.stopImmediatePropagation();
	} else {
		event.stopPropagation();
	}
	return event;
};
