import React, {
	useRef,
	useCallback,
	useImperativeHandle,
	forwardRef,
	useState,
} from "react";
import {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Dimensions,
} from "react-native";

export type BottomSheetModuleRef = {
	present: () => void;
	dismiss: () => void;
};

type BottomSheetModuleProps = {
	children: React.ReactNode;
	snapPoints?: (string | number)[];
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const BottomSheetModule = forwardRef<
	BottomSheetModuleRef,
	BottomSheetModuleProps
>(({ children, snapPoints = ["25%", "50%"] }, ref) => {
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const [visible, setVisible] = useState(false);

	const present = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);

	const dismiss = useCallback(() => {
		bottomSheetRef.current?.dismiss();
	}, []);

	useImperativeHandle(ref, () => ({ present, dismiss }));

	const handleSheetChanges = (index: number) => {
		setVisible(index !== -1);
	};

	return (
		<>
			{visible && (
				<TouchableWithoutFeedback onPress={dismiss}>
					<View style={styles.overlay} />
				</TouchableWithoutFeedback>
			)}
			<BottomSheetModal
				ref={bottomSheetRef}
				index={0}
				snapPoints={snapPoints}
				enablePanDownToClose
				onChange={handleSheetChanges}
				backgroundStyle={{
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					alignSelf: "center",
					width: SCREEN_WIDTH * 1,
					justifyContent: "center",
				}}
			>
				<BottomSheetView style={styles.sheetContent}>
					{children}
				</BottomSheetView>
			</BottomSheetModal>
		</>
	);
});

export const BottomSheetProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <BottomSheetModalProvider>{children}</BottomSheetModalProvider>;
};

export default BottomSheetModule;

const styles = StyleSheet.create({
	sheetContent: {
		padding: 30,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		zIndex: 1,
	},
});
