import { FileDown } from 'lucide-react';

interface DocItem {
  title: string;
  description: string;
  url: string;
  fileSize?: string;
}

interface DocumentDownloadsProps {
  documents: DocItem[];
  heading?: string;
}

export default function DocumentDownloads({ documents, heading = 'Nedladdningsbara dokument' }: DocumentDownloadsProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{heading}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => {
            return (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <FileDown className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                  {doc.fileSize && <span className="text-xs text-gray-400 mt-1 block">PDF · {doc.fileSize}</span>}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
