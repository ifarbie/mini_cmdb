package farizrifkyb.mini_cmdb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import farizrifkyb.mini_cmdb.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findTop3ByOrderByUpdatedAtDesc();
}

