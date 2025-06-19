import React from 'react';
import SalvusLogo from '@/components/SalvusLogo';
import DriveButton from '@/components/DriveButton';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showInstruction, setShowInstruction] = React.useState(false);

  const handleFeedback = (folderName: string) => {
    toast({
      title: "Pasta Aberta",
      description: `Redirecionando para ${folderName}`,
      duration: 2000,
    });
  };

  const handleFotosPacientes = () => {
    window.open('https://drive.google.com/drive/folders/1ipO7qB481vGt8au61bq7Bk-tte1hbds2?usp=drive_link', '_blank');
    setModalOpen(true);
    setShowInstruction(false);
  };

  return (
    <div className="min-h-screen bg-salvus-navy flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-salvus-navy via-salvus-navy to-blue-900/50"></div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-salvus-gold/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-salvus-gold/5 rounded-full blur-xl"></div>
      
      <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
        {/* Logo da Clínica */}
        <div className="text-center mb-12">
          <SalvusLogo className="w-72 h-auto mx-auto mb-4" />
          <div className="w-16 h-1 bg-salvus-gold mx-auto rounded-full"></div>
        </div>

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-light mb-2">Gestão de Documentos</h1>
          <p className="text-white/70 text-sm">Acesso rápido às suas pastas</p>
        </div>

        {/* Botões de Acesso */}
        <div className="space-y-4">
          <DriveButton
            title="Comprovantes Pagamentos Vendas"
            description="Adicionar comprovantes de pagamentos e vendas"
            url="https://drive.google.com/drive/folders/1r0aN825OYzkk14hjlhs9vXzi_aKq7tbK?usp=sharing"
          />
          
          <DriveButton
            title="Notas Fiscais"
            description="Adicionar e organizar notas fiscais"
            url="https://drive.google.com/drive/folders/179JTvFAL8BNTYRi-ZEQUfyPLYaSqyDkO?usp=drive_link"
          />
          <button
            onClick={handleFotosPacientes}
            className="w-full bg-white/10 backdrop-blur-sm border border-salvus-gold/30 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-salvus-gold/50 hover:scale-105 active:scale-95 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-left flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">Fotos Pacientes</h3>
                <p className="text-white/80 text-sm">Adicionar e organizar fotos dos pacientes</p>
              </div>
              {/* Ícone de link externo */}
              <svg className="text-salvus-gold ml-4 flex-shrink-0" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>
          </button>
        </div>

        {/* Instrução */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-xs leading-relaxed">
            Toque em uma pasta para abrir no Google Drive e adicionar seus documentos
          </p>
        </div>
      </div>

      {/* Modal para Fotos Pacientes */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Paciente Novo?</DialogTitle>
          </DialogHeader>
          {!showInstruction ? (
            <DialogFooter>
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Não
              </Button>
              <Button onClick={() => setShowInstruction(true)}>
                Sim
              </Button>
            </DialogFooter>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-center text-base text-gray-700">
                Crie uma nova pasta manualmente no Google Drive para o novo paciente.
              </p>
              <Button onClick={() => setModalOpen(false)}>Fechar</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Rodapé */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-white/40 text-xs">Clínica Salvus © 2024</p>
      </div>
    </div>
  );
};

export default Index;
