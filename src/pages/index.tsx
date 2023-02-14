import {
  Container,
  CustomEditor,
  DashboardLayout,
} from 'components';
import FormCart from 'components/FormCart/FormCart';

const Dashboard = () => (
  <DashboardLayout>
    <Container>
      <h1 className="text-center font-extrabold text-4xl">Text Editor</h1>
      <FormCart>
        <div className="flex justify-center flex-col items-center">
          <CustomEditor />
        </div>
      </FormCart>
    </Container>
  </DashboardLayout>
);

export default Dashboard;
