import { useTranslations } from 'next-intl';

import { useFetchSkills } from '@/api/skills';
import Loader from '@/components/Shared/Loader';

import SkillList from './SkillList';

export default function Skills() {
  const t = useTranslations();

  const { data, error, loading } = useFetchSkills();

  return (
    <div className="text-textColor relative border-b-4 border-borderColor">
      <div className="font-secondary px-[8%] pb-5 pt-[50px] text-2xl md:text-4xl">
        <div className="md:px-5 md:text-left text-center">{t('technicalSkills')}</div>
      </div>

      {error && <div className="text-center p-10">{t('errorSkills')}</div>}
      {loading && <Loader invert />}
      {!loading && !error && (
        <div className="w-full pb-[50px]">
          <SkillList index={0} skills={data.frontend} skillTitle={t('frontend')} />
          <SkillList index={1} skills={data.backend} skillTitle={t('backend')} />
          <SkillList index={2} skills={data.IA} skillTitle={t('ia')} />
          <SkillList index={3} skills={data.testingTools} skillTitle={t('testingTools')} />
          <SkillList index={4} skills={data.testingTools} skillTitle={t('databases')} />
          <SkillList index={5} skills={data.otherTools} skillTitle={t('otherTools')} />
        </div>
      )}
    </div>
  );
}
