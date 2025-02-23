import ComplianceFooter from '@/components/compliance/Footer';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#10111D' }}>
      <main className="flex-grow">
        {children}
      </main>
      <ComplianceFooter />
    </div>
  );
};

export default PublicLayout;