import DashboardLayout from "@/layouts/dahboard-layout";
import NoTVFound from "@/components/module/fallbacks/no-tv-connected";

export default function HomeTab() {
	return (
		<DashboardLayout>
			<NoTVFound />
		</DashboardLayout>
	);
}
