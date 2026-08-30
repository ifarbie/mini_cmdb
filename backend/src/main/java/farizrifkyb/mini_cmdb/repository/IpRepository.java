package farizrifkyb.mini_cmdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import farizrifkyb.mini_cmdb.entity.Ip;

public interface IpRepository extends JpaRepository<Ip, Long> {
    
}
